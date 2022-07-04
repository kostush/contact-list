class Table{

    createTable(header,body){
       let  tabHeader = this.createHeader(header);
       console.log('tabHeader', tabHeader);
       let  tabBody = this.createBody(body);
       console.log("tabbody",tabBody);
        return (tabHeader + tabBody);
    }

    createHeader(header){
        let tabHeader = '';
        if (header){
            tabHeader = '<tr>';
            for ( let key in header){
                tabHeader += '<th>'+ header[key] + '</th>';
            }
            tabHeader +='</tr>';
        }
        return tabHeader;
    }

    createBody(body){
        let tabBody='';
        if (body){
            for(let key in body) {
                tabBody += '<tr id=tr-'+key+'><td>'+ key + '</td>';
                    let innerValue = (body[key]);
                    for(let innerKey in innerValue ){
                        tabBody += '<td>'+ innerValue[innerKey] + '</td>' }
                tabBody += 
                '<td><button class="b2" onClick =editItem('+ key +') value="edit" name="button_edit_'+ key +'" id="button_edit_'+ key +'" type="submit" title="Позвонить" style="width: 100%; height: 100%">Edit</button></td>'+
                '<td><button class="b1" onClick =deleteItem('+ key +') value="delete" name="button_delete_'+ key +'" id=="button_delete_'+ key +'" type="submit" title="Позвонить" style="width: 100%; height: 100%">Delete</button></td>'; 
           
                tabBody +='</tr>';
            }
        }
    
        return tabBody;
    }

   
    getAllElements(id){
        let tab =   document.getElementById(id);
        let aRows = [...tab.getElementsByTagName('tr')];
        console.log('aRows',aRows);
        let aTable = aRows.map((tr) => {
            let obj ={};
            [...tr.cells].forEach((td, i) => {
                if(i>0 && i< 5){
                     obj[aRows[0].cells[i].textContent] = td.textContent;
                }
               
            });
            
            return obj;
        })
        console.info("aTable ",aTable);
        let userListResult={};
        if(aTable.length > 1){
            for (let i=1;i < aTable.length;i++){
                userListResult[i] = aTable[i];
            }
        } 
         return userListResult;
    }
}

