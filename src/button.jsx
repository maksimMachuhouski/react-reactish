/* eslint-disable react/prop-types */
export const Button = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};
