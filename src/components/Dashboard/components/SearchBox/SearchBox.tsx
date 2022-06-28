import './SearchBox.css';

interface props {
  placeholder: string;
  handleChange: (e: { target: { value: string } }) => void;
}

export default function SearchBox({placeholder, handleChange}: props) {
  const onInputChange = (e: { target: { value: string } }) => {
    handleChange(e)
  }
  return (
    <label className="search">
      <span className="search__icon" />
      <input
        type="search"
        className="search__field"
        placeholder={placeholder}
        onChange={(e) => onInputChange(e)}
      />
    </label>
  )
}
