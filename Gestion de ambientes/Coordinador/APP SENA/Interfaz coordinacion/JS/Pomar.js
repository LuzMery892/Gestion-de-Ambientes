* Contenedor que alinea reportes y cierre-ambiente horizontalmente */
.link_novedades {
    display: flex;              
    justify-content: space-between;
    gap: 0px;                  
    width: 70%;                
    box-sizing: border-box;    
}

/* Estilo para cada sección dentro de link_novedades */
.reportes,
.cierre-ambiente {
    background-color: white;    
    border: 1px solid #ddd;     
    border-radius: none;        
    padding: 10px;              
    text-align: center;         
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    flex: 1;                    
    min-width: 150px;           
    max-width: 45%;             
}

.reportes h2,
.cierre-ambiente h2 {
    font-size: 18px; 
    color: #04324D; 
    margin: 0; 
}

.reportes {
    background-color: #eaf6e9; 
    border: 1px solid #d1e7d1; 
}

.cierre-ambiente {
    background-color: #fef3e4; 
    border: 1px solid #f1d9b5; 
}