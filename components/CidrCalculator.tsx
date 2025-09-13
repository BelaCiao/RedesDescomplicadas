import React, { useState } from 'react';

type CidrResult = {
  network: string;
  broadcast: string;
  mask: string;
  wildcard: string;
  firstHost: string;
  lastHost: string;
  hosts: string;
} | null;

const CidrCalculator = () => {
    const [ip, setIp] = useState('');
    const [prefix, setPrefix] = useState('24');
    const [error, setError] = useState('');
    const [results, setResults] = useState<CidrResult>(null);

    const ipToLong = (ipAddr: string) => {
        return ipAddr.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
    };

    const longToIp = (long: number) => {
        return [(long >>> 24), (long >>> 16) & 255, (long >>> 8) & 255, long & 255].join('.');
    };

    const handleCalculate = () => {
        setError('');
        setResults(null);
        
        const prefixNum = parseInt(prefix, 10);

        const ipRegex = /^((\d{1,3})\.){3}(\d{1,3})$/;
        if (!ipRegex.test(ip) || ip.split('.').some(octet => parseInt(octet) > 255)) {
            setError('Formato de endereço IP inválido.');
            return;
        }

        if (isNaN(prefixNum) || prefixNum < 0 || prefixNum > 32) {
            setError('O prefixo CIDR deve ser um número entre 0 e 32.');
            return;
        }
        
        const ipLong = ipToLong(ip);
        const mask = (0xFFFFFFFF << (32 - prefixNum)) >>> 0;
        const network = (ipLong & mask) >>> 0;
        const broadcast = (network | (~mask >>> 0)) >>> 0;
        
        const firstHost = prefixNum >= 31 ? 'N/A' : longToIp(network + 1);
        const lastHost = prefixNum >= 31 ? 'N/A' : longToIp(broadcast - 1);
        const hosts = prefixNum >= 31 ? '0' : (Math.pow(2, 32 - prefixNum) - 2).toLocaleString('pt-BR');

        setResults({
            network: longToIp(network),
            broadcast: longToIp(broadcast),
            mask: longToIp(mask),
            wildcard: longToIp(~mask >>> 0),
            firstHost,
            lastHost,
            hosts
        });
    };

    return (
        <div className="calculator-container">
            <div className="input-group">
                <label htmlFor="cidr-ip">Endereço IP:</label>
                <input type="text" id="cidr-ip" placeholder="Ex: 192.168.1.55" value={ip} onChange={(e) => setIp(e.target.value)} />
                <label htmlFor="cidr-prefix">/</label>
                <input type="number" id="cidr-prefix" min="0" max="32" placeholder="24" value={prefix} onChange={(e) => setPrefix(e.target.value)} />
                <button onClick={handleCalculate} className="btn-calc">Calcular</button>
            </div>
            {error && <div id="cidr-error">{error}</div>}
            {results && (
                <div id="cidr-results">
                    <p>Endereço de Rede: <span>{results.network}</span></p>
                    <p>Endereço de Broadcast: <span>{results.broadcast}</span></p>
                    <p>Máscara de Sub-rede: <span>{results.mask}</span></p>
                    <p>Wildcard Mask: <span>{results.wildcard}</span></p>
                    <p>Primeiro Host Válido: <span>{results.firstHost}</span></p>
                    <p>Último Host Válido: <span>{results.lastHost}</span></p>
                    <p>Número de Hosts Válidos: <span>{results.hosts}</span></p>
                </div>
            )}
        </div>
    );
};

export default CidrCalculator;
