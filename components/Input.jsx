import React from "react"

const Input = (props) => {
  return (
    <div className="flex-col">
      <label
        className={`xl:text-sm text-xs font-bold ${
          props.errors[props.name] ? "text-colors-light-red" : "text-gray-500"
        } tracking-[2px] uppercase xl:pb-2 pb-[.25rem]`}
        htmlFor={props.name}>
        {props.name}
      </label>

      <input
        type="number"
        id={props.name}
        className={`xl:w-[160px] min-[400px]:w-[88px] w-[70px] xl:h-[73px] h-[54px] rounded-lg border-[1px] ${
          props.errors[props.name] && "border-colors-light-red"
        } focus:border-colors-purple xl:pl-6 min-[400px]:pl-4 pl-2 caret-colors-purple xl:text-3xl min-[400px]:text-xl text-base font-bold appearance-none outline-none`}
        placeholder={props.placeholder}
        onInput={props.moveToNextFocus}
        {...props.register(props.name, {
          ...props.validation,
          valueAsNumber: true,
        })}
      />

      <p className="text-colors-light-red xl:text-sm min-[400px]:text-[.5rem] text-[12px] italic pt-2">
        {props.errors[props.name]?.message}
      </p>
    </div>
  )
}

export default Input
