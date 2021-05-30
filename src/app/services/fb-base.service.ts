import { ServiceFields } from './../shared/models/service-Inventory';
import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  get(collectionName: string): Observable<ServiceFields[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('title', 'asc');
      return query;
    }).valueChanges() as Observable <ServiceFields[]>;
  }

  async add(collectionName : string, data : ServiceFields, id?: string) : Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
  update(collectionName: string, id: string, data: ServiceFields) {
    return this.afs.collection(collectionName).doc(id).update(data);
  }

  delete(collectionName: string, id: string) {
    return this.afs.collection(collectionName).doc(id).delete();
  }

}
