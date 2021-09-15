import '../asset/styles/AddressBook.css'
import { FaBirthdayCake } from 'react-icons/fa'
import { FiMail, FiEdit, FiTrash2, FiChevronDown } from 'react-icons/fi'
import { BiPhone } from 'react-icons/bi'

function AddressBook({ filteredList, showDropList, deleteItem, editItem }) {

  const handleEdit = (name) => {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
    editItem(name)
  }
  return (
    <>
      <section className='address-book'>
        {filteredList.map((item, index) => {
          const { name, phone, email, birthday, show } = item;
          return (
            <article className='address-book__item' key={index}>
              <div className='address-book__top' onClick={() => showDropList(index)}>
                <h3 className='address-book__name'>{name}</h3>
                <FiChevronDown />
              </div>
              {show &&
                <div className='drop-list'>
                  <div className='flex-wrapper '>
                    <BiPhone className='address-book__phone' />
                    <h4 >{phone}</h4>
                  </div>
                  <div className="flex-wrapper">
                    <FiMail className='address-book__icon' />
                    <h4 className='address-book__email'>{email}</h4>
                  </div>
                  <div className="flex-wrapper">
                    <FaBirthdayCake className='address-book__icon' />
                    <h4 className='address-book__birth'>{birthday}</h4>
                  </div>
                  <div className="delete-container">
                    <FiEdit className='address-book__edit' onClick={() => handleEdit(name)} />
                    <FiTrash2 className='address-book__delete' onClick={() => deleteItem(name)} />
                  </div>
                </div>
              }
            </article>
          )
        })
        }
      </section>

    </>
  )
}
export default AddressBook;