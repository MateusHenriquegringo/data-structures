class HashMap {
    constructor(){
        this.table = {}
    }

    put(k,v){
        if(k != null && v != null){
            this.table[k] = v;
        }
        return undefined;
    }

    remove(k){
        if(this.table.hasOwnProperty(k)){
            delete this.table[k];
        }
        return undefined;
    }

    get(k){
        return this.table[k];
    }

    loseloseHash(k){
        if (typeof k === 'number') {
            return number;
        }
        let hash = 0;
        for(let i = 0; i < k.length; i++){
            hash += k.charCodeAt(i);
        }
        return hash % 37;
    }
}
