const eventWasWarmup = (event) => {
  if (event.source === 'serverless-plugin-warmup') {
	console.log('WarmUp - Lambda is warm!')
	return true
  } else {
	return false
  }
}

module.exports = {
	eventWasWarmup
}