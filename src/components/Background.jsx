const symbols = ['fn()', '{ }', '</>', '=>', '[ ]', '&&', '01', '( )']

export default function Background() {
  return <div className="background" aria-hidden="true"><div className="symbol-field">{symbols.map((symbol, index) => <span key={index}>{symbol}</span>)}</div><div className="ambient-orb" /></div>
}
