'use strict'

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { DynamoDBDocumentClient, PutCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb')

const client = new DynamoDBClient({})
const ddbDocClient = DynamoDBDocumentClient.from(client)

const uploadToDynamo = async (tableName, itemObject) => {
	const params = {
		TableName: tableName,
		Item: itemObject
	}
	
	const ddbPutCommand = new PutCommand(params)
	
	try {
		await ddbDocClient.send(ddbPutCommand)
	} catch(err) {
		throw new Error(err)
	}
}

const getAllItemsFromTable = async (table) => {
	const params = {
	 TableName: table
	}
	
	const ddbScanCommand = new ScanCommand(params)
	
	const allItems = await ddbDocClient.send(ddbScanCommand)
	return allItems.Items
}

module.exports = {
	uploadToDynamo,
	getAllItemsFromTable
}