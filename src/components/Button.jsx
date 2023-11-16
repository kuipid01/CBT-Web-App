/* eslint-disable react/prop-types */


export const Button = ({text}) => {
  return (
    <button className="px-3 bg-primary hover:bg-white hover:border-2 hover:border-primary transition-all hover:text-primary text-white font-bold py-2">
        {text}
    </button>
  )
}

