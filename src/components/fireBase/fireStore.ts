import { app } from './initApp'
import { getFirestore, collection, doc, setDoc, getDocs, getDoc, deleteDoc, query, orderBy, limit } from 'firebase/firestore'
// init:fireBase:db
const db = getFirestore(app)
const saveData = async (dbCollection:string,docName:string,data:object) => {
  console.log('saving', dbCollection, data)
  try {
    await setDoc(doc(db,dbCollection,docName),data)
    console.log('done')
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
const getData = async (dbCollection:string) =>{
  const querySnapshot = await getDocs(collection(db, dbCollection))
  const docs: object[] = []
  querySnapshot.forEach((doc) => { docs.push(doc.data()) })
  return docs
}
const qData = async (dbCollection:string,order:string,desc=false,max:number) =>{
  const q = query(collection(db,dbCollection), orderBy(order,desc?'desc':'asc'), limit(max))
  const querySnapshot = await getDocs(q)
  const docs: object[] = []
  querySnapshot.forEach((doc) => { docs.push(doc.data()) })
  return docs
}
const rDoc = async (dbCollection:string,docName:string) => {
  const d = doc(db, dbCollection, docName)
  const r = await getDoc(d)
  return r.data()
}
const rmData = async (dbCollection:string,docName:string) => {
  const r = await deleteDoc(doc(db,dbCollection,docName))
  return r
}

// share
export { saveData, getData, qData, rmData, rDoc }