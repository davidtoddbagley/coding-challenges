$(document).ready(function() {
      PanEle.init();
});

var PanEle = {};

jQuery.extend(PanEle, {

    init: function() {
        PanEle.ClockDegrees(12,30);
        PanEle.ClockDegrees(11,45);
        PanEle.ClockDegrees(10,00);
        PanEle.ClockDegrees(9,15);
        //
        PanEle.Triangle(4);
        PanEle.Triangle(7);
    },

    ClockDegrees: function (h,m) {
      var degrees = 0
        , posM    = 360 / 60 * m
        , posH    = 360 / 12 * h + ( ( posM / 360 ) * 30 )
        , str     = ''
      ;
      if(posH>360){
        posH = posH - 360 ;
      }
      if(posM==0){
        posM = 360 ;
      }
      if(posM>posH){
        str     = posM+' - '+posH ;
        degrees = posM - posH ;
      } else {
        str     = posH+' - '+posM ;
        degrees = posH - posM ;
      }
      var check = 360 - degrees ; 
      if(degrees>check){
        degrees = check ;
        console.log('ClockDegrees - h: '+h+', m: '+m+', '+str+' = '+check) ;
      } else {
        console.log('ClockDegrees - h: '+h+', m: '+m+', '+str+' = '+degrees) ;
      }
    },

    Triangle: function (input) {
      console.log('Triangle - input: '+input) ;
      var c     = 0
        , i     = 0
        , l     = input + 1
        , row   = '' 
        , rows  = []
      ;
      if(input>0){
        while(input>0){
          c = 0 ;
          l-- ;
          row = '' ;
          while(c<l){
            c++;
            i++;
            if(row){
              row += ' ' ;
            }
            row += i;
          }
          rows.push(row);
          input-- ;
        }
        rows.reverse();
        $.each(rows,function(key,row){
          console.log(row);
        });
      }
    }    

});
