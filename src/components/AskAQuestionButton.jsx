import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast'
import { submitQuestionToTable } from '../api/questions-api'

const AskAQuestionButton = () => {
	const [showModal, setShowModal] = useState(false)
	const [question, setQuestion] = useState('')
	const [name, setName] = useState('')
	const [showSubmitButton, setShowSubmitButton] = useState(true)
	const [showSubmittedQuestionToast, setShowSubmittedQuestionToast] = useState(false)
	const [showInvalidQuestionToast, setShowInvalidQuestionToast] = useState(false)
	const [showSubmissionErrorToast, setShowSubmissionErrorToast] = useState(false)
	
	const handleShowModal = () => setShowModal(true)
	
	const handleCloseModal = () => {
		setShowSubmittedQuestionToast(false)
		setShowInvalidQuestionToast(false)
		setShowModal(false)
	}
	
	const handleSubmitQuestion = async () => {
		console.log('question:', question)
		console.log('name:', name)
		const textareaRegex = /^(?!.*(<|>|&|")).{1,5000}$/
		const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
		if (textareaRegex.test(question) && (name === '' || nameRegex.test(name))) {
			console.log('question and name are valid, submitting question...')
			const questionData = {
				question: question,
				name: name
			}
			
			// make http post here
			let response
			try {
				response = await submitQuestionToTable(questionData)
			} catch(err) {
				console.error('Error submitting question:', err)
			}
			
			if (response && !('error' in JSON.parse(JSON.stringify(response)))) {
				console.log('Successfully submitted question:', response)
				
				setShowSubmitButton(false)
				setQuestion('')
				setName('')
				setShowInvalidQuestionToast(false)
				setShowSubmittedQuestionToast(true)
				setTimeout(() => {
					handleCloseModal()
				}, 6000)
			} else {
				console.error('Question submission error:', response)
				setShowSubmissionErrorToast(true)
			}
		} else {
			console.log('Question is invalid')
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
							⚠️ Your question must not be empty, and the following characters are not supported: {'<'}, {'>'}, ', and &
						</Toast.Body>
					</Toast>
					
					<Toast onClose={() => setShowSubmissionErrorToast(false)} show={showSubmissionErrorToast}>
						<Toast.Header>
							<strong className='me-auto'>Error Submitting Question</strong>
						</Toast.Header>
						<Toast.Body>
							⛔️ There was an error submitting your question. Sorry about that. If you'd like to submit your question over email, send one to <a href="mailto:thegoldenhurricast@gmail.com?subject=Listener Question">thegoldenhurricast.com</a>
						</Toast.Body>
					</Toast>
					
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleCloseModal}>
						Close
					</Button>
					{showSubmitButton &&
						<Button variant='primary' onClick={handleSubmitQuestion}>
							Submit
						</Button>	
					}
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default AskAQuestionButton