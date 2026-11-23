function Button({text, onClick, color, type = 'button'}) {
  return (
    <button type={type} onClick={onClick} style={{backgroundColor: color}}>
      {text}
    </button>
  )
}

export default Button