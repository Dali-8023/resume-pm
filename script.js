// 添加交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 为技能标签添加点击效果
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // 为工作经历和教育背景项添加悬停效果
    const jobItems = document.querySelectorAll('.job-item, .edu-item');
    jobItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 为数据统计项添加点击效果
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('click', function() {
            // 添加脉冲动画
            this.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
    
    // 为产品模块添加折叠/展开功能
    const productSections = document.querySelectorAll('.product-section');
    productSections.forEach(section => {
        const title = section.querySelector('h3');
        title.style.cursor = 'pointer';
        
        title.addEventListener('click', function() {
            const content = section;
            content.classList.toggle('collapsed');
        });
    });
    
    // 添加打印简历功能
    const printButton = document.createElement('button');
    printButton.id = 'print-resume';
    printButton.innerHTML = '<i class="fas fa-print"></i> 打印简历';
    document.body.appendChild(printButton);
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 添加产品模块计数器
    const productCount = document.querySelectorAll('.product-section').length;
    const productCountElement = document.createElement('div');
    productCountElement.id = 'product-counter';
    productCountElement.innerHTML = `<i class="fas fa-layer-group"></i> 产品模块: ${productCount} 个`;
    document.querySelector('.sidebar').appendChild(productCountElement);
    
    // 添加CSS动画和样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        #print-resume {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 30px;
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 100;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }
        
        #print-resume:hover {
            background-color: var(--secondary);
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.25);
        }
        
        #product-counter {
            background-color: rgba(26, 188, 156, 0.1);
            padding: 0.8rem 1rem;
            border-radius: var(--border-radius);
            margin-top: 1.5rem;
            font-weight: 500;
            color: var(--accent);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .product-section.collapsed {
            max-height: 4rem;
            overflow: hidden;
            position: relative;
        }
        
        .product-section.collapsed::after {
            content: '点击展开查看详情';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(26, 188, 156, 0.9));
            padding: 1rem;
            text-align: center;
            color: white;
            font-weight: 500;
        }
        
        .product-section h3::after {
            content: ' \\25BC';
            font-size: 0.8em;
            margin-left: 0.5rem;
            opacity: 0.7;
        }
        
        .product-section.collapsed h3::after {
            content: ' \\25B2';
        }
        
        @media print {
            #print-resume, #product-counter {
                display: none;
            }
            
            .skill-tag:hover {
                transform: none !important;
            }
            
            .stat-item:hover {
                transform: none !important;
            }
            
            .product-section:hover, .highlight:hover {
                transform: none !important;
                box-shadow: none !important;
            }
            
            .product-section, .highlight {
                break-inside: avoid;
            }
        }
        
        @media (max-width: 768px) {
            #print-resume {
                bottom: 10px;
                right: 10px;
                padding: 8px 12px;
                font-size: 0.9rem;
            }
        }
    `;
    document.head.appendChild(style);
});