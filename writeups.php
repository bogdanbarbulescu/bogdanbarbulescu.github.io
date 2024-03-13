<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Portofolio</title>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'>
  <link rel="stylesheet" href="./style.css">
  <script type="module" src="main.js"></script>

</head>

<body>

  <?php

  # including navigation bar here
  include './include/navbar.php';

  ?>



  <div class="container">
    <div class="card">
      <div class="card__header">
        <img src="./img/main-qimg-3d5f270dc17065c37c42ebe90e373a87.webp" alt="card__image" class="card__image" width="500">
      </div>
      <div class="card__body">
        <span class="tag tag-blue">Technology</span>
        <h4>Cisco Certified Network Associate (CCNA)</h4>
        <p>This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
      </div>

    </div>
    <div class="card">
      <div class="card__header">
        <img src="./img/fitness-tag.jpg" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        <span class="tag tag-brown">Food</span>
        <h4>Delicious Food</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
      </div>
      <div class="card__footer">
        <div class="user">
          <img src="https://i.pravatar.cc/40?img=2" alt="user__image" class="user__image">
          <div class="user__info">
            <h5>Jony Doe</h5>
            <small>Yesterday</small>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card__header">
        <img src="./img/fitness-tag.jpg" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        <span class="tag tag-red">Automobile</span>
        <h4>Race to your heart content</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
      </div>
      <div class="card__footer">
        <div class="user">
          <img src="https://i.pravatar.cc/40?img=3" alt="user__image" class="user__image">
          <div class="user__info">
            <h5>John Doe</h5>
            <small>2d ago</small>
          </div>
        </div>
      </div>
    </div>
  </div>


</body>

</html>