import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { db } from '../../firebase-config.js';

export async function get(collection_name, where, order, single=false)
{
    const connection = collection(db, collection_name);
    let q = query(connection);

    where.forEach( w => { q = query(q, w); });

    if (order.length > 0) {
        q = query(q, orderBy(order, "desc"));
    }

    if (single) {
        q = query(q, limit(1));
    }

    try {
        const result = await getDocs(q);
        const data = (result.docs.map((doc) => ({...doc.data(), id: doc.id})));
        return data;
    } catch (err) {
        console.log(err);
    }

};