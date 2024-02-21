import express from 'express';
import { selectedIds as selectedIdsRaw, allPictures as allPicturesRaw } from './tempdata.js';

let selectedIds = selectedIdsRaw;
let allPictures = allPicturesRaw;

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello!');
});

app.get('/pictures', (req, res) => {
  res.json(pictures);
});

function FindPictures(ids) {
    return ids.map(id => allPictures.find(p => p.id === id));
  }

app.get('/selectedPictures', (req, res) => {
  const selectedPictures = FindPictures(selectedIds);
  res.json(selectedPictures);
});

app.get('/pictures/:pictureId', (req, res) => {
  const pictureId = req.params.pictureId;
  const picture = allPictures.find(p => p.id === pictureId);
  res.json(picture);
});

app.post('/selectedPictures', (req, res) => {
    const pictureId = req.body.id;
    selectedIds.push(pictureId);
    const selectedPictures = FindPictures(selectedIds);
    res.json(selectedPictures);
});
  
app.delete('/selectedPictures/:pictureId', (req, res) => {
    const pictureId = req.params.pictureId;
    selectedIds = selectedIds.filter(id => id !== pictureId);
    const selectedPictures = FindPictures(selectedIds);
    res.json(selectedPictures);
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000')
});