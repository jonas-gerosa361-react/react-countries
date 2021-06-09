export default function TextInput({
  id = "text_input",
  labelDescription = "Label default",
  inputDefaultValue = "",
  onInputChange = null,
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label htmlFor={id}>{labelDescription}</label>
      <input
        className="border"
        autoFocus={autoFocus}
        id={id}
        type="text"
        value={inputDefaultValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
