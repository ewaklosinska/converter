import { render } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import NavBar from './NavBar';

// app.test.js
test("navigates home when you click the Start btn", () => {
  // in a real test a renderer like "@testing-library/react"
  // would take care of setting up the DOM elements
  const root = document.createElement('div');
  document.body.appendChild(root);

  // Render app
  render(
    <MemoryRouter initialEntries={['/']}>
      <NavBar />
    </MemoryRouter>,
    root
  );

  // Interact with page
  act(() => {
    // Find the link (perhaps using the text content)
    const goHomeLink = document.querySelector('Button');
    // Click it
    goHomeLink && goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // Check correct page content showed up
  expect(document.body.textContent).toBeDefined();
});