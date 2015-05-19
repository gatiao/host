
$(function() {
    
    $('#informarCPF').click(function(e) {
        e.preventDefault();
        
        $('#mostrarCampoCPF').slideDown();
    });
    
    $('#informarCNPJ').click(function(f) {
        f.preventDefault();
        
        $('#mostrarCampoCNPJ').slideDown();
    });
    
    $('#informarContribuinte').click(function(g) {
        g.preventDefault();
        
        $('#mostrarCampoContribuinte').slideDown();
    });
    
    $('#informarImovel').click(function(h) {
        h.preventDefault();
        
        $('#mostrarCampoImovel').slideDown();
    });
        
});



