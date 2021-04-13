export default function () {
  const resizeHeight = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight + 2}px`;
  };

  return { resizeHeight };
}
