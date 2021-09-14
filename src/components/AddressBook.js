import '../asset/styles/AddressBook.css'
import { FaPhoneAlt, FaBirthdayCake } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

function AddressBook({ filteredList }) {
  
  return (
    <>
      <section className='address-book'>
        {filteredList.map((item,index) => {
          const { name, phone, email } = item;
          return (
            <article className='address-book__item' key={index}>
              <div className='address-book__top'>
                <h3 className='address-book__name'>{name}</h3>
                <div className='flex-wrapper'>
                  <FaPhoneAlt className='address-book__phone-icon' />
                  <h3 className='address-book__phone'>{phone}</h3>
                </div>

              </div>
              <div className='address-book__bottom'>
                <div className="flex-wrapper">
                  <FiMail className='address-book__icon' />
                  <h5 className='address-book__email'>{email}</h5>
                </div>
                <div className="flex-wrapper">
                  <FaBirthdayCake className='address-book__icon' />
                  <h5>1009/01/20</h5>
                </div>
              </div>
            </article>
          )
        })
        }
      </section>

    </>
  )
}
export default AddressBook;