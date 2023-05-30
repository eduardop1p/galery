import './styles.css';

export default function TextInput({ handleChange, searchValue }) {
  return <input placeholder="Pesquisar..." className="text-input" type="search" onChange={handleChange} value={searchValue} />;
}
