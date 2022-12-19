

/*
 =========================
   Theme Function Script
 ==========================
*/

$(document).ready(function(){
    //dark and light mood enable
    theme_mood(); 
    // Main Blogpost Title line Break
    titleSet(); 
    /* 
     ===== Related Post fetch in Single Post section ====
    */
    let singlePage = $('body').hasClass('item-view');
    let staticPage = $('body').hasClass('static-page-view');
    if(singlePage === true && staticPage != true){
      let labels = [];
       $('.main-blog-post .post-label-link').each(function(i, e){
        labels[i] =  $(this).data('label');
        });
       let urlL = labels.join('|label:');
       let full_url = '/feeds/posts/default?alt=json&max-results=5&q=label:' + urlL;

    }
    
    /* Image Lazy Loader */
    $('img.lazyload').lazyload();
    
    
    /* Sharing icon toggle */
    $('.sharing .sharing-button').on('click', function(e){
        e.preventDefault();
        $('.share-buttons-container').slideToggle();
    });
    
    /* Sharing Post Option */
    $('.rr-sharing-link').each(function(i, e){
       let target =  $(this).data('target');
       if(target == '' || target == null){
          let copyL = $(this).data('orginialurl');
          $(this).parents('li').html('').hide();
           $(this).click(function(event){
             event.preventDefault();
          
          });
        
          
       }
    });
    /* End Sharing Option */
    
    
    
     let hc =  $(".header-widget").html();
     $('.sm-header-logo').html(hc);
    $('#header > div').each(function(i, ele){
            let lnt =  $('#header > div').length;
            if(i == lnt-1){
                      $(this).css({'margin':'0 0 0 auto'});
                    }
    else if(i == lnt-2){
         $(this).css({'margin':'0 auto 0'});
       }
           });
    
    /*
      ===== Main Blog Post ajax Post Loading ====
    */
    $(".rr-more-post").on('click', function(e){
           e.preventDefault();
          let l = $(this).attr('href');
          let btnV = $(this).html();
          ajaxPost(l, btnV);
          $(this).data('disable', 'true');
       });
    
    $('.item-view .main-blog-post blockquote').each(function(i, e){
        $(this).prepend('<span class="blockq">&#x201C;</span>');
    });
    
    
    });
    // Close The document Ready Function
    function theme_mood(){let t=localStorage.getItem("theme");if(void 0===t)localStorage.setItem("theme","light"),$("body").addClass("light-theme");else{var e=$(".dark-icon");"dark"==t?LightMood(e):DarkMoof(e)}$(".dark-icon").each(function(t,e){$(this).on("click",function(t){let e=localStorage.getItem("theme");($(this).data("mood"),"light"==e)?LightMood($(this)):DarkMoof($(this))})})}
    
    function LightMood(t){t.html('<i class="bi bi-brightness-high"></i>'),t.data("mood","dark"),localStorage.setItem("theme","dark"),$("body").addClass("dark-theme").removeClass("light-theme")}
    
    function DarkMoof(t){t.html('<i class="bi bi-moon"></i>'),t.data("mood","light"),localStorage.setItem("theme","light"),$("body").addClass("light-theme").removeClass("dark-theme")}
    function titleSet(){$(".main-blog-post .post-title").each(function(t,e){let a=$(this).data("title"),s=titleS(a);$(this).find("a").html(s)})}
    
    function titleS(t){let e=t.trim().split(" "),a="",s="";for(let o=0;o<e.length;o++)o<4?a=a+e[o]+" ":s=s+e[o]+" ";return'<span class="first-line">'+a+'</span><span class="second-line">'+s+"</span>"}