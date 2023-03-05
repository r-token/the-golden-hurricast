import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast'

const AskAQuestionButton = () => {
	const [showModal, setShowModal] = useState(false)
	const [question, setQuestion] = useState('')
	const [name, setName] = useState('')
	const [showSubmittedQuestionToast, setShowSubmittedQuestionToast] = useState(false)
	const [showInvalidQuestionToast, setShowInvalidQuestionToast] = useState(false)
	
	const handleShowModal = () => setShowModal(true)
	
	const handleCloseModal = () => {
			setShowSubmittedQuestionToast(false)
			setShowInvalidQuestionToast(false)
			setShowModal(false)
	}
	
	const handleSubmitQuestion = () => {
		console.log('question:', question)
		console.log('name:', name)
		const textareaRegex = /^(?!.*(<|>|&|")).{1,5000}$/
		if (textareaRegex.test(question)) {
			console.log('question is valid')
			// make http post here
			
			setQuestion('')
			setName('')
			setShowInvalidQuestionToast(false)
			setShowSubmittedQuestionToast(true)
			setTimeout(() => {
				handleCloseModal()
			}, 6000)
		} else {
			console.log('question is invalid')
			setShowInvalidQuestionToast(true)
		}
	}
	
	return (
		<div>
			<Button variant='primary' onClick={handleShowModal}>
				Ask a Question for the Show
			</Button>
			
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Ask a Question</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Submit a question and we'll do our best to answer it on an upcoming show. Feel free to ask anonymously if you'd prefer us not to mention your name.
					<br /> <br />
					<Form>
						<Form.Group
							className='mb-3'
							controlId='form.ControlTextarea'
							onChange={(event) => {setQuestion(event.target.value)}}
						>
							<Form.Label><strong>What is your question for us?</strong></Form.Label>
							<Form.Control required as='textarea' rows={3}>{question}</Form.Control>
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label><strong>What is your name?</strong></Form.Label>
							<Form.Control
								type='text'
								controlId='form.NameTextArea'
								value={name}
								placeholder='Your Name'
								onChange={(event) => {setName(event.target.value)}}
							/>
						</Form.Group>
					</Form>
					
					<Toast onClose={() => setShowSubmittedQuestionToast(false)} show={showSubmittedQuestionToast} delay={4000} autohide>
						<Toast.Header>
							<strong className='me-auto'>Question Submitted!</strong>
						</Toast.Header>
						<Toast.Body>
							✅ Thanks for submitting a question! We'll try to answer it on the podcast soon.
						</Toast.Body>
					</Toast>
					
					<Toast onClose={() => setShowInvalidQuestionToast(false)} show={showInvalidQuestionToast} delay={6000} autohide>
						<Toast.Header>
							<strong className='me-auto'>Invalid Question</strong>
						</Toast.Header>
						<Toast.Body>
							Your question must not be empty, and the following characters are not supported: {'<'}, {'>'}, ', and &
						</Toast.Body>
					</Toast>
					
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleCloseModal}>
						Close
					</Button>
					<Button variant='primary' onClick={handleSubmitQuestion}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default AskAQuestionButton