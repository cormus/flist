angularConfig.controller('TelaCtrl', function($rootScope, $location){
	window.setTimeout(function(){
			var gruposList		   = [];

			function loadGrupo()
			{
				//realiza uma busca no banco de dados
				function queryDBGrupo(tx) 
				{
					tx.executeSql("SELECT * FROM framwork_teste", [], querySuccessGrupo, errorCB);
				}
				function querySuccessGrupo(tx, results) 
				{
					gruposList = results.rows;
				}
				db.transaction(queryDBGrupo, errorCB);
			}
	});
});

angularConfig.controller('ContatoCtrl', function($rootScope, $location, $routeParams)
{
    //fecha o snap
    //appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    //$rootScope.activetab = $location.path();
});  

angularConfig.controller('TelaCtrl', ['$rootScope', '$location', '$routeParams', function($rootScope, $location, $routeParams) 
{
	$rootScope.id_noticia = ($routeParams.id_noticia)? $routeParams.id_noticia: 0;
	
    //fecha o snap
    //appClass.snap.close();
    //coloca uma classe se ativado no link do menu
    //$rootScope.activetab = $location.path();
	
	$rootScope.ns = [
		{
			id:1,
			title:'Mitsubishi Lancer ganha nova versão na linha 2016; veja preços',
			img:'http://s2.glbimg.com/qfwswXfzJGayPALqcibsfgtJvms=/620x465/s.glbimg.com/jo/g1/f/original/2015/06/09/sv60_2015_33.jpg'
		},
		{
			id:2,
			title:'Kawasaki Z300 chegará às lojas por R$ 17.990', 
			img:'http://s2.glbimg.com/Wvtd0G5pof1VCIICswCPQ-b91wA=/s.glbimg.com/jo/g1/f/original/2015/03/31/z300.jpg'
		}, 
		{
			id:3,
			title:'Honda lança modelo derivado da MotoGP por US$ 184.000', 
			img:'http://s2.glbimg.com/_FsC9hcZkIR5y37EOFRLuJF0Ocg=/s.glbimg.com/jo/g1/f/original/2015/06/11/hondarcv_3.jpg'
		}, 
		{
			id:4,
			title:'Coleção de supercarros deve atingir R$ 200 milhões em leilão', 
			img:'http://s2.glbimg.com/knT-R7YE8FzqGcXBgloTuheAF1E=/s.glbimg.com/jo/g1/f/original/2015/06/10/leilao_carros_montagem1.jpg'
		}
	];
	
	$rootScope.noticia = function(id_noticia)
	{
		$location.path('noticia/'+id_noticia);
	}
	
	
	//$rootScope.$apply();
	
	window.setTimeout(function(){ appClass.iniIscroll(); }, 3000);
}]); 

angularConfig.controller('HomeCtrl', function($rootScope, $location)
{
	$location.path('tela');    
}); 