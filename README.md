

# RedisAPI NodeJS


<p align="center">
 <img src="https://img.shields.io/npm/dm/@neferett/nedis.svg" alt="Downloads"></a>
 <a href="https://www.npmjs.com/package/@neferett/nedis"><img src="https://img.shields.io/npm/v/@neferett/nedis.svg" alt="Version"></a>
 <a href="https://github.com/jordanbonaldi/Nedis/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"></a>
</p>
	

## Installation

`npm install @neferett/nedis`

```typescript
 new RedisDatabase(<host>, <password>).connect()
```

## How to use it

First you have to create a Model class extending the abstract RedisModel as follow:
   ```typescript
 export interface CategoryInterface {  
	  assets : string[],  
	  messageID : string,  
	  name ?: string  
}  
	  
export default new class CategoryModel extends RedisModel {  
	  constructor() {
		  // First arguments is the database number
		  // Second arguments is the folder folder name
		  super(2, 'categories');  
	 }  
}
```

Once your model is created and your database connected you can do as follow:
```typescript
 CategoryModel.create<CategoryInterface>('6', {  
  assets: ["BTCUSD"],  
  messageID: "189027633",  
  name: "Bitcoin"  
});

CategoryModel.read<CategoryInterface>('6').then((category: CategoryInterface) => {});

CategoryModel.update<CategoryInterface>('6', {  
  assets: ["BTCUSD", "ETHUSD"],  
  messageID: "189027633",  
  name: "Bitcoin"  
}).then((category: CategoryInterface) => {});

CategoryModel.getAll<CategoryInterface>().then((categories: {value: string, data: CategoryInterface}[]) => {  
  // Do whatever you want  
});

CategoryModel.delete('6');

CategoryModel.read<CategoryInterface>('6').then((category: CategoryInterface) =>   
 CategoryModel.update<CategoryInterface>('6', {  
  ...category,  
  assets: ["ETHUSD"]  
 }));
```

## Models Methods

```typescript
/* Data ID to create with the interface/class to push */
create<T>(id: string, data: T): Promise<T>;  

/* Data ID to read and return in promise */
read<T>(id: string): Promise<T>;  

/* Data ID and new Data to push */
update<T>(id: string, data: T): Promise<T>;  
  
/* Data ID to delete*/  
delete(id: string): Promise<boolean>;  
  
/* All Data inside Models to return */
getAll<T>(): Promise<{value: string, data: T[]}[]>;

```

## License

Licensed under MIT
