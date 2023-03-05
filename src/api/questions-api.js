const submitQuestionToTable = async (questionData) => {
	try {
		const response = await fetch(`${process.env.GATSBY_QUESTIONS_API_ENDPOINT}/question`, {
			method: 'POST',
			body: JSON.stringify(questionData),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return response
	} catch(err) {
		console.error('Error submitting question to table:', err)
		return JSON.stringify({ error: err }, null, 2)
	}
}

module.exports = {
	submitQuestionToTable
}