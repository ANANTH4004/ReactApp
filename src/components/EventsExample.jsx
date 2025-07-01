function EventsExample() {
  return (
    <>
      <h1>Events Example</h1>
      <button onClick={() => console.log('Button clicked!')}>Click Me!</button>
      <br />
      <input
        type="text"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Type something..."
      />
    </>
  )
}

export default EventsExample
