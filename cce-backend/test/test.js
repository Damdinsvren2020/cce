const { Pool } = require('pg');
const databasepoolConfiguration = {
    user: 'node_user',
    host: 'localhost',
    database: 'ccedb',
    password: 'smart2020',
    port: 5432
};
const pool = new Pool(databasepoolConfiguration);
const {CATEGORIES,HEDIIMBEE,MEALS,NEWS,QUIZS,RESULTS} =require ('./dummy-data');
//console.log("A1//////////////////////////////////////////",QUIZS[0]);




class clsResult{
// static clearResults() {
//     return new Promise(( resolve, reject ) => {
//         pool.query(`delete from result where "Pid">0`),
//         (error, response) => {
//             if(error) return  reject(error);
//             resolve();
//         }
//     }
//     );
// }

    static storeQuiz({id,categoryIds,title,imageUrl,root1,quiz_id}) {
        return new Promise(( resolve, reject ) => {
            pool.query(
                `insert into meal (id,"categoryIds",title,"imageUrl",root1,quiz_id)
                values ($1,$2,$3,$4,$5,$6)`,
                [id,categoryIds,title,imageUrl,root1,quiz_id],
                (error, response) => {
                    if(error) return  reject(error);
                    resolve();
                }
            ) 
        });
    }
}
let i=0;
const map1 = MEALS.map(uouo => {
    const {id,categoryIds,title,imageUrl,root1,quiz_id} = uouo;
    if(typeof uouo.imageUrl == "object"){
        for(i=0;i<uouo.imageUrl.length;i++){
            let imageUrl=uouo.imageUrl[i];
            clsResult.storeQuiz({id,categoryIds,title,imageUrl,root1,quiz_id});
        }
    }

    //let info_text = uouo.info_text[i];
    else clsResult.storeQuiz({id,categoryIds,title,imageUrl,root1,quiz_id});

    return ;
})