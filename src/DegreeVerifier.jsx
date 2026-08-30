import { useState } from 'react';
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = '0xa2989CbD8F2d539368a5250bd0F4C9386A6094b0';
const RPC_URL = 'https://ethereum-sepolia-rpc.publicnode.com'; // public, no key needed
const ABI = [
  'function verifyDegree(uint256 _degreeId) view returns (uint256 id, address student, address issuingUniversity, string degreeName, string major, string name, string fName, uint256 regNumber, uint256 dateIssued, bool isValid)',
];

function shortAddr(addr) {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

export default function DegreeVerifier() {
  const [degreeId, setDegreeId] = useState('1');
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | loading | error | done

  async function handleVerify(e) {
    e.preventDefault();
    setStatus('loading');
    setResult(null);
    try {
      const provider = new ethers.JsonRpcProvider(RPC_URL);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      const r = await contract.verifyDegree(degreeId);
      setResult({
        id: r.id.toString(),
        student: r.student,
        university: r.issuingUniversity,
        degreeName: r.degreeName,
        major: r.major,
        name: r.name,
        regNumber: r.regNumber.toString(),
        dateIssued: new Date(Number(r.dateIssued) * 1000),
        isValid: r.isValid,
      });
      setStatus('done');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="verifier" className="section">
      <p className="section-eyebrow">Live on-chain read</p>
      <h2 className="section-title">Try the Degree Verifier</h2>
      <p className="verifier-intro">
        This reads directly from the deployed Sepolia contract behind the
        Degree Verification System — no wallet needed, no backend in between.
        IDs 1 and 2 are demo records I issued while building; nothing here is
        a real university credential.
      </p>

      <form className="verifier-form" onSubmit={handleVerify}>
        <input
          type="number"
          min="1"
          value={degreeId}
          onChange={(e) => setDegreeId(e.target.value)}
          placeholder="Degree ID"
          className="verifier-input"
        />
        <button type="submit" className="verifier-button" disabled={status === 'loading'}>
          {status === 'loading' ? 'Reading chain…' : 'Verify'}
        </button>
      </form>

      {status === 'error' && (
        <p className="verifier-status">No record found for that ID, or the network is unreachable.</p>
      )}

      {status === 'done' && result && (
        <div className="verifier-result">
          <div className={`verifier-badge ${result.isValid ? 'valid' : 'revoked'}`}>
            {result.isValid ? 'Valid' : 'Revoked'}
          </div>
          <dl className="verifier-fields">
            <dt>Degree</dt><dd>{result.degreeName}</dd>
            <dt>Major</dt><dd>{result.major}</dd>
            <dt>Name on record</dt><dd>{result.name}</dd>
            <dt>Registration No.</dt><dd>{result.regNumber}</dd>
            <dt>Date issued</dt><dd>{result.dateIssued.toLocaleDateString()}</dd>
            <dt>Student address</dt><dd className="mono">{shortAddr(result.student)}</dd>
            <dt>Issuing university</dt><dd className="mono">{shortAddr(result.university)}</dd>
          </dl>
        </div>
      )}
    </section>
  );
}