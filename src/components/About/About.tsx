import './About.css';

export default function About() {
  return(
    <div className="about">
      <h2>About page</h2>
      <p>Information about task you can find here: <a href="https://github.com/supermetrics-public/react-assignment" target="_blank" rel="noreferrer">https://github.com/supermetrics-public/react-assignment</a></p>
      <p>What was done:</p>
      <ul className="about__list about__list--done">
        <li>Create a simple post reader as a React SPA.</li>
        <li>Implement above using React components and CSS3.</li>
        <li>Retrieve the data shown in the app from the API described below.</li>
        <li>Login Screen with email and name inputs.</li>
        <li>Sender list with sender name and post count ordered by name alphabetically.</li>
        <li>Clicking on a sender opens that sender's posts in the post list view.</li>
        <li>Search box for senders. Any senders whose name do not contain the text entered are hidden</li>
        <li>Search box for posts. Any posts that do not contain the text entered are hidden</li>
        <li>Post list where posts are ordered by creation time.</li>
        <li>Post order buttons to allow choosing most recent first and most recent last ordering for posts list</li>
      </ul>
      <p>What's left to do</p>
      <ul className="about__list about__list--left">
        <li>Implement testing</li>
        <li>Deep-linkable post list. This means that it is possible to enter a URL that directly selects the sender whose posts are shown.</li>
      </ul>
    </div>
  );
}
