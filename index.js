const express = requrie('express');
const app = express();

const {
	getAll,
	getFaxById,
	createFax,
	updateFax,
	deleteFax,
} = require('./controller/facultyController');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('api/faculty/', getAll);
app.get('api/faculty/:id', getFaxById);
app.post('api/faculty/', createFax);
app.put('api/faculty/:id', updateFax);
app.delete('api/faculty/:id', deleteFax);

app.listen(3000, (err) => {
	err ? console.log(err) : console.log('Listening on port 3000');
});
