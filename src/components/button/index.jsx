import './styles.css';

export default function Button({ text, onClick, disabled }) {
  return (
    <button disabled={disabled} className="btn" onClick={onClick}>
      {text}
    </button>
  );
}
