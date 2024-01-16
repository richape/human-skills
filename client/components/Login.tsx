interface LoginProps {
  className?: string
}

function Login({ className }: LoginProps) {
  return (
    <div className={className}>
      <div className="p-4 rounded-md" style={{ backgroundColor: '#B87DF2' }}>
        <button className="text-yellow-500 text-2xl font-bold font-sans text-center">
          login
        </button>
      </div>
    </div>
  )
}

export default Login
