# Pizza_test

This is a small web application for online pizza ordering.
#### Technologies:

- react js, redux on frontend
- node js, express on backend
- mongodb data base


#### Get started:
1.  git clone https://github.com/DMikhailiets/Pizza_task.git
2. sudo systemctl start mongod
	mongo
2. cd frontend/backend 
	yarn install 
	yarn start
3. You need to create several test orders for the store. To do this, send a json post request to http://localhost:5555/pizza
test JSON 
```javascript
{ 
		"title": "Fiorentina ",
		"description": "Spinach, free-range egg, mozzarella, tomato, garlic oil, black olives and Gran Milano cheese",
		"costInDollars": 5.7,
		"costInEuro": 6.34,
		"photoUrl": "https://s8.hostingkartinok.com/uploads/thumbs/2020/08/5563a9262d86e4e1e329c47b07222ae8.png",
		"photoUrlMini": "https://s8.hostingkartinok.com/uploads/images/2020/08/c9925f64783a0b335a82f175676735f7.png"
}
```
5. You can get all orders on GET http://localhost:5555/order
