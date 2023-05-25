import React, { useState } from "react"

const Calculator = () => {
  const [days, setDays] = useState("")
  const [months, setMonths] = useState("")
  const [years, setYears] = useState("")

  const [showResults, setShowResults] = useState(false)

  const [diffDays, setDiffDays] = useState(0)
  const [diffMonths, setDiffMonths] = useState(0)
  const [diffYears, setDiffYears] = useState(0)

  const [dayError, setDayError] = useState("")
  const [monthError, setMonthError] = useState("")
  const [yearsError, setYearsError] = useState("")

  const handleChangeDays = (e) => {
    setDays(e.target.value)
  }
  const handleChangeMonths = (e) => {
    setMonths(e.target.value)
  }

  const handleChangeYears = (e) => {
    setYears(e.target.value)
  }

  const validateForm = () => {
    let isValid = true

    if (!days) {
      setDayError("This field is required")
      isValid = false
    } else {
      setDayError("")
    }

    if (!months) {
      setMonthError("This field is required")
      isValid = false
    } else {
      setMonthError("")
    }

    if (!years) {
      setYearsError("This field is required")
      isValid = false
    } else {
      setYearsError("")
    }
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setShowResults(true)

      const currentDate = new Date()
      const inputDate = new Date(`${years}-${months}-${days}`)

      const diffTime = Math.abs(currentDate - inputDate)
      const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25))
      const diffMonths = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 365.25)) /
          (1000 * 60 * 60 * 24 * (365.25 / 12))
      )
      const diffDays = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * (365.25 / 12))) /
          (1000 * 60 * 60 * 24)
      )

      setDiffDays(diffDays)
      setDiffMonths(diffMonths)
      setDiffYears(diffYears)
    }
  }

  return (
    <div className="bg-white xl:min-h-[650px] xl:min-w-[840px] min-h-[485px] min-w-[345px] rounded-xl rounded-br-[5rem] shadow-sm">
      <div className="xl:pt-14 pt-12 pb-9 xl:pl-14 pl-[1.5rem] max-w-[320px]">
        <form className="max-w-[310px]" onSubmit={handleSubmit}>
          <div className="flex xl:gap-8 gap-4 w-full">
            <div className="flex-col">
              <p
                className={`xl:text-sm text-xs font-bold ${
                  dayError ? "text-colors-light-red" : "text-gray-500"
                } tracking-[2px] uppercase xl:pb-2 pb-[.25rem]`}>
                Day
              </p>
              <input
                value={days}
                onChange={handleChangeDays}
                type="number"
                min="1"
                max="31"
                placeholder="DD"
                className={`xl:w-[160px] w-[88px] xl:h-[73px] h-[54px] rounded-lg border-[1px] ${
                  dayError && "border-colors-light-red"
                } focus:border-colors-purple xl:pl-6 pl-4 caret-colors-purple xl:text-3xl text-xl font-bold appearance-none outline-none`}
              />

              {dayError && (
                <p className="text-colors-light-red xl:text-sm text-[.5rem] italic pt-2">
                  {dayError}
                </p>
              )}
            </div>

            <div className="flex-col">
              <p
                className={`xl:text-sm text-xs font-bold ${
                  monthError ? "text-colors-light-red" : "text-gray-500"
                } tracking-[2px] uppercase xl:pb-2 pb-[.25rem]`}>
                Month
              </p>
              <input
                value={months}
                onChange={handleChangeMonths}
                type="number"
                min="1"
                max="12"
                placeholder="MM"
                className={`xl:w-[160px] w-[88px] xl:h-[73px] h-[54px] rounded-lg border-[1px] ${
                  monthError && "border-colors-light-red"
                } focus:border-colors-purple xl:pl-6 pl-4 caret-colors-purple xl:text-3xl text-xl font-bold appearance-none outline-none`}
              />

              {monthError && (
                <p className="text-colors-light-red xl:text-sm text-[.5rem] italic pt-2">
                  {monthError}
                </p>
              )}
            </div>

            <div className="flex-col">
              <p
                className={`xl:text-sm text-xs font-bold ${
                  yearsError ? "text-colors-light-red" : "text-gray-500"
                } tracking-[2px] uppercase xl:pb-2 pb-[.25rem]`}>
                Year
              </p>
              <input
                value={years}
                onChange={handleChangeYears}
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                placeholder="YYYY"
                className={`xl:w-[160px] w-[88px] xl:h-[73px] h-[54px] rounded-lg border-[1px] ${
                  yearsError && "border-colors-light-red"
                } focus:border-colors-purple xl:pl-6 pl-4 caret-colors-purple xl:text-3xl text-xl font-bold appearance-none outline-none`}
              />

              {yearsError && (
                <p className="text-colors-light-red xl:text-sm text-[.5rem] italic pt-2">
                  {yearsError}
                </p>
              )}
            </div>
          </div>

          <div className="xl:mr-10 mr-6 xl:pt-12 pt-16 relative border-b border-b-gray-200 xl:min-w-[725px] min-w-[290px]">
            <button className="flex items-center justify-center bg-colors-purple xl:h-[92px] h-[65px] xl:w-[92px] w-[65px] rounded-full absolute xl:right-0 right-[110px] xl:top-[3px] top-8 hover:bg-black transition-all shadow-md">
              <img src="./icon-arrow.svg" alt="Arrow" className="w-[35px]" />
            </button>
          </div>
        </form>
      </div>

      <div className="xl:pt-6 pt-2 ml-14 mr-[3.75rem] xl:mt-3 mt-10 max-w-[700px]">
        <p className="xl:text-[100px] text-[56px] font-extrabold italic xl:pl-10 pl-1 xl:-m-10 -m-8 xl:max-w-[720px] max-w-[310px]">
          {showResults && days ? (
            <span className="text-colors-purple">{diffYears}</span>
          ) : (
            <span className="text-colors-purple">--</span>
          )}{" "}
          years
        </p>
        <p className="xl:text-[100px] text-[56px] font-extrabold italic xl:pl-10 pl-1 xl:-m-10 -m-8 xl:max-w-[720px] max-w-[310px]">
          {showResults && days ? (
            <span className="text-colors-purple">{diffMonths}</span>
          ) : (
            <span className="text-colors-purple">--</span>
          )}{" "}
          months
        </p>
        <p className="xl:text-[100px] text-[56px] font-extrabold italic xl:pl-10 pl-1 xl:-m-10 -m-8 xl:max-w-[720px] max-w-[310px]">
          {showResults && days ? (
            <span className="text-colors-purple">{diffDays}</span>
          ) : (
            <span className="text-colors-purple">--</span>
          )}{" "}
          days
        </p>
      </div>
    </div>
  )
}

export default Calculator
