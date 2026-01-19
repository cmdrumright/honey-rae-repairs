import { useEffect, useState } from 'react'
import './Tickets.css'
import { Ticket } from './Ticket'
import { FilterBar } from './FilterBar'
import { getAllTickets } from '../../services/ticketService'

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showOpenOnly, setShowOpenOnly] = useState(false)

  const getAndSetTickets = () => {
    getAllTickets().then((ticketArray) => {
      if (currentUser.isStaff) {
        setAllTickets(ticketArray)
      } else {
        const customerTickets = ticketArray.filter(
          (ticket) => ticket.userId === currentUser.id
        )
        setAllTickets(customerTickets)
      }
    })
  }

  useEffect(() => {
    getAndSetTickets()
  }, [currentUser]) // only runs on initial render and when currentUser changes

  useEffect(() => {
    let newFilteredTickets = structuredClone(allTickets)
    if (showEmergencyOnly) {
      newFilteredTickets = newFilteredTickets.filter(
        (ticket) => ticket.emergency === true
      )
    }
    if (showOpenOnly) {
      newFilteredTickets = newFilteredTickets.filter(
        (ticket) => ticket.dateCompleted === ''
      )
    }
    newFilteredTickets = newFilteredTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredTickets(newFilteredTickets)
  }, [showEmergencyOnly, allTickets, searchTerm, showOpenOnly])

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar
        setShowEmergencyOnly={setShowEmergencyOnly}
        setShowOpenOnly={setShowOpenOnly}
        setSearchTerm={setSearchTerm}
        currentUser={currentUser}
      />
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return (
            <Ticket
              ticket={ticketObj}
              currentUser={currentUser}
              getAndSetTickets={getAndSetTickets}
              key={ticketObj.id}
            />
          )
        })}
      </article>
    </div>
  )
}
