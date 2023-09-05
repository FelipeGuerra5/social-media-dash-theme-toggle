import DarkToggle from './DarkToggle'

export default function Head(): JSX.Element {
  return (
    <head>
      <div>
        <h1>
          Social Media Dashboard
        </h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="dark-mode-container">
        <DarkToggle />
      </div>
    </head>
  )
}
