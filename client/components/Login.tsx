interface LoginProps {
  className?: string
}

function Login({ className }: LoginProps) {
  return (
    <div className={className}>
      <div
        className="p-3.5 rounded-md drop-shadow-xl"
        style={{ backgroundColor: '#7E51B2' }}
      >
        <button className="text-yellow-500 btn">login</button>
      </div>
    </div>
  )
}

export default Login
