import { api, LightningElement } from 'lwc';
 
export default class PaginationBase extends LightningElement {
    totalRec;
    noOfRecsPerPage=5;
    totalpages=0;
    currentPage=1;
    visibleRec;
    @api
    set records(data){
        if(data){
            this.totalRec=data;
            console.log(this.totalRec);
            this.visibleRec = this.totalRec.slice(0,this.noOfRecsPerPage);
            this.totalpages = Math.ceil(this.totalRec.length / this.noOfRecsPerPage);
            console.log(this.totalpages);
            this.updateRecords();
        }
    }

    get records(){
        return this.visibleRec;
    }

    get disablePrev(){
        return this.currentPage<=1;
    }

    get disableNext(){
        return this.currentPage >= this.totalpages;
    }

    previousHandler(){
        if(this.currentPage>1){
            this.currentPage -=1;
            this.updateRecords();
        }
    }

    nextHandler(){
        if(this.currentPage< this.totalpages){
            this.currentPage +=1;
            this.updateRecords();
        }

    }

    updateRecords(){
        const start = this.noOfRecsPerPage * (this.currentPage-1)
        const end = this.noOfRecsPerPage * this.currentPage;
        console.log(start, end);
        console.log(this.totalRec);
        this.visibleRec = this.totalRec.slice(start, end);
        this.dispatchEvent(new CustomEvent('update',
            {detail:{
                records: this.visibleRec
            }
            }
        ));
    }
}