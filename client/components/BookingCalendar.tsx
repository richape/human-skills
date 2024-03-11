import { useState } from 'react'
import Calendar from 'react-calendar'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

/**
 * A component to display a calendar for booking a date range.
 */
function BookingCalendar() {
  /**
   * The selected date range in the calendar. Can be a single date or a range of
   * two dates. Initially set to the current date.
   */
  const [value, onChange] = useState<Value>(new Date())

  /**
   * Render the component.
   */
  return (
    <div>
      <Calendar
        /**
         * Callback function to handle when the selected date range changes.
         */
        onChange={onChange}
        /**
         * The selected date range to display in the calendar.
         */
        value={value}
      />
    </div>
  )
}

export default BookingCalendar
// Learning to use Codeium for best practice
