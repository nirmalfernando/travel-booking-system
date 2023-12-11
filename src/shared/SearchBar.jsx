import React, {useRef} from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'

const SearchBar = () => {

    const fromRef = useRef('')
    const toRef = useRef('')
    const departureRef = useRef('')
    const returnRef = useRef('')
    const passengersRef = useRef(0)

    const searchHandler = () =>{

        const from = fromRef.current.value
        const to = toRef.current.value
        const departure = departureRef.current.value
        const returnDate = returnRef.current.value
        const passenger = passengersRef.current.value

        if(from === '' || to === '' || departure === '' || returnDate === '' || passenger === ''){
            return alert('All fields are required!')
        }
    }

  return <Col lg='12'>
    <div className="search__bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <div>
                    <h6>FROM</h6>
                    <input type="text" placeholder='Sri Lanka' ref={fromRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex form__group form__group-fast'>
                <div>
                    <h6>TO</h6>
                    <input type="text" placeholder='USA' ref={toRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <div>
                    <h6>DEARTURE</h6>
                    <input type="date" placeholder='date' ref={departureRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <div>
                    <h6>RETURN</h6>
                    <input type="date" placeholder='date'ref={returnRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group '>
                <div>
                    <h6>PASSENGERS</h6>
                    <input type="number" placeholder='0' ref={passengersRef}/>
                </div>
            </FormGroup>
            <span className="search__icon" type='submit' onClick={searchHandler}>
                <i class="ri-search-line"></i>
            </span>
        </Form>
    </div>
  </Col>
}

export default SearchBar