<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phúc Long Coffee & Tea - Thức uống trà và cà phê ngon</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        /* Header Styles */
        .header-top {
            background: #0a4f3c;
            color: white;
            padding: 8px 0;
            font-size: 13px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        .header-top-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-main {
            background: white;
            padding: 15px 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo img {
            height: 60px;
            transition: transform 0.3s;
        }

        .logo img:hover {
            transform: scale(1.05);
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 30px;
        }

        .nav-menu a {
            text-decoration: none;
            color: #0a4f3c;
            font-weight: 500;
            transition: color 0.3s;
            position: relative;
        }

        .nav-menu a:hover {
            color: #d4a574;
        }

        .nav-menu a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: #d4a574;
            transition: width 0.3s;
        }

        .nav-menu a:hover::after {
            width: 100%;
        }

        .header-actions {
            display: flex;
            gap: 20px;
            align-items: center;
        }

        .search-box {
            position: relative;
        }

        .search-box input {
            padding: 8px 35px 8px 15px;
            border: 1px solid #ddd;
            border-radius: 20px;
            width: 200px;
            transition: width 0.3s;
        }

        .search-box input:focus {
            width: 250px;
            outline: none;
            border-color: #0a4f3c;
        }

        .search-box button {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            color: #0a4f3c;
        }

        .cart-icon {
            position: relative;
            cursor: pointer;
            font-size: 24px;
            color: #0a4f3c;
            transition: color 0.3s;
        }

        .cart-icon:hover {
            color: #d4a574;
        }

        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background: #d4a574;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
        }

        /* Hero Section */
        .hero-slider {
            position: relative;
            height: 500px;
            overflow: hidden;
            background: linear-gradient(135deg, #0a4f3c 0%, #0d6d54 100%);
        }

        .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 1s;
            background-size: cover;
            background-position: center;
        }

        .slide.active {
            opacity: 1;
        }

        .slide-content {
            text-align: center;
            color: white;
            z-index: 2;
            background: rgba(0, 0, 0, 0.5);
            padding: 40px;
            border-radius: 10px;
            backdrop-filter: blur(5px);
        }

        .slide-content h1 {
            font-size: 48px;
            margin-bottom: 20px;
            animation: slideInTop 1s;
        }

        .slide-content p {
            font-size: 20px;
            margin-bottom: 30px;
            animation: slideInBottom 1s;
        }

        @keyframes slideInTop {
            from {
                transform: translateY(-50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes slideInBottom {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .btn-primary {
            background: #d4a574;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary:hover {
            background: #b8935f;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(212, 165, 116, 0.3);
        }

        .slider-dots {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 3;
        }

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: background 0.3s;
        }

        .dot.active {
            background: white;
        }

        /* Product Section */
        .products-section {
            padding: 80px 0;
            background: #f8f8f8;
        }

        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-header h2 {
            font-size: 36px;
            color: #0a4f3c;
            margin-bottom: 15px;
            position: relative;
            display: inline-block;
        }

        .section-header h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: #d4a574;
        }

        .product-categories {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 40px;
        }

        .category-btn {
            padding: 10px 25px;
            background: white;
            border: 2px solid #0a4f3c;
            color: #0a4f3c;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 500;
        }

        .category-btn.active,
        .category-btn:hover {
            background: #0a4f3c;
            color: white;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .product-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }

        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .product-image {
            position: relative;
            height: 250px;
            overflow: hidden;
        }

        .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }

        .product-card:hover .product-image img {
            transform: scale(1.1);
        }

        .product-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #ff4444;
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
        }

        .product-info {
            padding: 20px;
        }

        .product-name {
            font-size: 18px;
            font-weight: 600;
            color: #0a4f3c;
            margin-bottom: 10px;
        }

        .product-description {
            color: #666;
            font-size: 14px;
            margin-bottom: 15px;
            line-height: 1.5;
        }

        .product-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .price {
            font-size: 20px;
            font-weight: bold;
            color: #d4a574;
        }

        .add-to-cart {
            background: #0a4f3c;
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 20px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .add-to-cart:hover {
            background: #0d6d54;
        }

        /* Store Locations */
        .locations-section {
            padding: 80px 0;
            background: white;
        }

        .locations-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .location-card {
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 25px;
            transition: all 0.3s;
        }

        .location-card:hover {
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            transform: translateY(-5px);
        }

        .location-name {
            font-size: 20px;
            font-weight: 600;
            color: #0a4f3c;
            margin-bottom: 15px;
        }

        .location-info {
            color: #666;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .location-info i {
            color: #d4a574;
            width: 20px;
        }

        /* Newsletter */
        .newsletter-section {
            background: linear-gradient(135deg, #0a4f3c 0%, #0d6d54 100%);
            padding: 60px 0;
            color: white;
        }

        .newsletter-content {
            text-align: center;
        }

        .newsletter-content h3 {
            font-size: 32px;
            margin-bottom: 20px;
        }

        .newsletter-form {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 30px;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        }

        .newsletter-form input {
            flex: 1;
            padding: 12px 20px;
            border: none;
            border-radius: 25px;
            font-size: 16px;
        }

        .newsletter-form button {
            padding: 12px 30px;
            background: #d4a574;
            color: white;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .newsletter-form button:hover {
            background: #b8935f;
        }

        /* Footer */
        footer {
            background: #0a4f3c;
            color: white;
            padding: 50px 0 20px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 30px;
        }

        .footer-section h4 {
            margin-bottom: 20px;
            color: #d4a574;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 10px;
        }

        .footer-section ul li a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-section ul li a:hover {
            color: #d4a574;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-links a {
            width: 40px;
            height: 40px;
            background: #d4a574;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            text-decoration: none;
            transition: all 0.3s;
        }

        .social-links a:hover {
            background: white;
            color: #0a4f3c;
            transform: translateY(-3px);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.7);
        }

        /* Cart Modal */
        .cart-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 2000;
            animation: fadeIn 0.3s;
        }

        .cart-modal.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .cart-content {
            background: white;
            width: 90%;
            max-width: 600px;
            max-height: 80vh;
            border-radius: 10px;
            overflow-y: auto;
            animation: slideUp 0.3s;
        }

        @keyframes slideUp {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .cart-header {
            background: #0a4f3c;
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .close-cart {
            font-size: 24px;
            cursor: pointer;
            background: none;
            border: none;
            color: white;
        }

        .cart-items {
            padding: 20px;
        }

        .cart-item {
            display: flex;
            gap: 15px;
            padding: 15px;
            border-bottom: 1px solid #eee;
        }

        .cart-item img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 5px;
        }

        .cart-item-info {
            flex: 1;
        }

        .cart-item-name {
            font-weight: 600;
            margin-bottom: 5px;
        }

        .cart-item-price {
            color: #d4a574;
            font-weight: bold;
        }

        .quantity-controls {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
        }

        .quantity-btn {
            width: 30px;
            height: 30px;
            border: 1px solid #ddd;
            background: white;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s;
        }

        .quantity-btn:hover {
            background: #0a4f3c;
            color: white;
        }

        .cart-total {
            padding: 20px;
            background: #f8f8f8;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
        }

        .checkout-btn {
            width: calc(100% - 40px);
            margin: 20px;
            padding: 15px;
            background: #d4a574;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .checkout-btn:hover {
            background: #b8935f;
        }

        /* Mobile Menu */
        .mobile-menu-toggle {
            display: none;
            flex-direction: column;
            gap: 4px;
            cursor: pointer;
        }

        .mobile-menu-toggle span {
            width: 25px;
            height: 3px;
            background: #0a4f3c;
            transition: all 0.3s;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: flex;
            }

            .nav-menu {
                position: fixed;
                top: 0;
                left: -100%;
                width: 280px;
                height: 100vh;
                background: white;
                flex-direction: column;
                padding: 60px 20px;
                box-shadow: 2px 0 10px rgba(0,0,0,0.1);
                transition: left 0.3s;
                z-index: 1001;
            }

            .nav-menu.active {
                left: 0;
            }

            .header-actions {
                gap: 10px;
            }

            .search-box input {
                width: 150px;
            }

            .hero-slider {
                height: 400px;
            }

            .slide-content h1 {
                font-size: 32px;
            }

            .slide-content p {
                font-size: 16px;
            }

            .products-grid {
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }

            .locations-grid {
                grid-template-columns: 1fr;
            }

            .footer-content {
                grid-template-columns: 1fr;
            }
        }

        /* Loading Animation */
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #0a4f3c;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Toast Notification */
        .toast {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #0a4f3c;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transform: translateX(400px);
            transition: transform 0.3s;
            z-index: 3000;
        }

        .toast.show {
            transform: translateX(0);
        }
    </style>
</head>
<body>
    <!-- Header Top -->
    <div class="header-top">
        <div class="container">
            <div class="header-top-content">
                <span>📍 Giao hàng tận nơi | ☎️ Hotline: 1800 6779</span>
                <span>🕐 Mở cửa: 7:00 - 21:30</span>
            </div>
        </div>
    </div>

    <!-- Header Main -->
    <header class="header-main">
        <div class="container">
            <div class="header-content">
                <div class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <div class="logo">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='%230a4f3c'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='24' font-weight='bold'%3EPhúc Long%3C/text%3E%3C/svg%3E" alt="Phúc Long">
                </div>

                <nav class="nav-menu" id="navMenu">
                    <a href="#home">Trang chủ</a>
                    <a href="#products">Sản phẩm</a>
                    <a href="#coffee">Cà phê</a>
                    <a href="#tea">Trà</a>
                    <a href="#stores">Cửa hàng</a>
                    <a href="#about">Về chúng tôi</a>
                </nav>

                <div class="header-actions">
                    <div class="search-box">
                        <input type="text" placeholder="Tìm kiếm...">
                        <button>🔍</button>
                    </div>
                    <div class="cart-icon" onclick="toggleCart()">
                        🛒
                        <span class="cart-count" id="cartCount">0</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Slider -->
    <section class="hero-slider">
        <div class="slide active" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 500"%3E%3Crect fill="%23d4a574" width="1920" height="500"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23fff" font-size="48" font-family="Arial"%3ECoffee Background%3C/text%3E%3C/svg%3E');">
            <div class="slide-content">
                <h1>Thưởng Thức Cà Phê Đậm Đà</h1>
                <p>Hương vị truyền thống, chất lượng vượt trội</p>
                <button class="btn-primary">Khám phá ngay</button>
            </div>
        </div>
        <div class="slide" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 500"%3E%3Crect fill="%230a4f3c" width="1920" height="500"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23fff" font-size="48" font-family="Arial"%3ETea Background%3C/text%3E%3C/svg%3E');">
            <div class="slide-content">
                <h1>Trà Cao Cấp Việt Nam</h1>
                <p>Tinh hoa từ những đồi trà xanh mát</p>
                <button class="btn-primary">Thử ngay</button>
            </div>
        </div>
        <div class="slide" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 500"%3E%3Crect fill="%23b8935f" width="1920" height="500"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23fff" font-size="48" font-family="Arial"%3EBakery Background%3C/text%3E%3C/svg%3E');">
            <div class="slide-content">
                <h1>Bánh Ngọt Thủ Công</h1>
                <p>Tươi mới mỗi ngày, ngọt ngào từng khoảnh khắc</p>
                <button class="btn-primary">Đặt hàng</button>
            </div>
        </div>
        <div class="slider-dots">
            <span class="dot active" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    </section>

    <!-- Products Section -->
    <section class="products-section" id="products">
        <div class="container">
            <div class="section-header">
                <h2>Sản Phẩm Nổi Bật</h2>
                <p>Những món đồ uống được yêu thích nhất tại Phúc Long</p>
            </div>

            <div class="product-categories">
                <button class="category-btn active" onclick="filterProducts('all')">Tất cả</button>
                <button class="category-btn" onclick="filterProducts('coffee')">Cà phê</button>
                <button class="category-btn" onclick="filterProducts('tea')">Trà</button>
                <button class="category-btn" onclick="filterProducts('bakery')">Bánh ngọt</button>
            </div>

            <div class="products-grid" id="productsGrid">
                <!-- Products will be loaded here -->
            </div>
        </div>
    </section>

    <!-- Store Locations -->
    <section class="locations-section" id="stores">
        <div class="container">
            <div class="section-header">
                <h2>Hệ Thống Cửa Hàng</h2>
                <p>Tìm cửa hàng Phúc Long gần bạn nhất</p>
            </div>

            <div class="locations-grid">
                <div class="location-card">
                    <h3 class="location-name">Phúc Long Nguyễn Huệ</h3>
                    <div class="location-info">
                        <i>📍</i>
                        <span>42 Nguyễn Huệ, Quận 1, TP.HCM</span>
                    </div>
                    <div class="location-info">
                        <i>☎️</i>
                        <span>028 3821 6666</span>
                    </div>
                    <div class="location-info">
                        <i>🕐</i>
                        <span>7:00 - 22:00</span>
                    </div>
                </div>

                <div class="location-card">
                    <h3 class="location-name">Phúc Long Lê Văn Sỹ</h3>
                    <div class="location-info">
                        <i>📍</i>
                        <span>350 Lê Văn Sỹ, Quận 3, TP.HCM</span>
                    </div>
                    <div class="location-info">
                        <i>☎️</i>
                        <span>028 3931 7777</span>
                    </div>
                    <div class="location-info">
                        <i>🕐</i>
                        <span>7:00 - 21:30</span>
                    </div>
                </div>

                <div class="location-card">
                    <h3 class="location-name">Phúc Long Ph
