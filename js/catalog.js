/*!
 * Blog Catalog Generator v1.0.0
 * Automatically generates table of contents for blog posts
 * Compatible with Hux Blog theme
 */

(function($) {
    'use strict';

    var BlogCatalog = {
        
        // Configuration
        config: {
            selectors: {
                postContent: '.post-container',
                catalogContainer: '.side-catalog',
                catalogBody: '.catalog-body',
                headings: 'h1, h2, h3, h4, h5, h6'
            },
            classes: {
                h1Nav: 'h1_nav',
                h2Nav: 'h2_nav', 
                h3Nav: 'h3_nav',
                h4Nav: 'h4_nav',
                h5Nav: 'h5_nav',
                h6Nav: 'h6_nav',
                active: 'active'
            },
            scrollOffset: 80, // Offset for scroll positioning
            smoothScrollDuration: 600
        },

        // Initialize the catalog
        init: function() {
            var self = this;
            
            // Check if catalog container exists
            if (!$(self.config.selectors.catalogContainer).length) {
                return;
            }

            // Generate catalog
            self.generateCatalog();
            
            // Bind events
            self.bindEvents();
            
            // Initialize scroll spy
            self.initScrollSpy();
        },

        // Generate catalog from headings
        generateCatalog: function() {
            var self = this;
            var $postContent = $(self.config.selectors.postContent);
            var $catalogBody = $(self.config.selectors.catalogBody);
            var $headings = $postContent.find(self.config.selectors.headings);
            
            if ($headings.length === 0) {
                // Hide catalog if no headings found
                $(self.config.selectors.catalogContainer).hide();
                return;
            }

            // Clear existing catalog
            $catalogBody.empty();
            
            // Process each heading
            $headings.each(function(index, heading) {
                var $heading = $(heading);
                var tagName = heading.tagName.toLowerCase();
                var text = $heading.text().trim();
                var id = self.generateHeadingId(text, index);
                
                // Add ID to heading if it doesn't have one
                if (!$heading.attr('id')) {
                    $heading.attr('id', id);
                }
                
                // Create catalog item
                var catalogItem = self.createCatalogItem(tagName, text, id);
                $catalogBody.append(catalogItem);
            });
            
            // Show catalog
            $(self.config.selectors.catalogContainer).show();
        },

        // Generate unique ID for heading
        generateHeadingId: function(text, index) {
            // Clean text and create ID
            var id = text.toLowerCase()
                .replace(/[\s\W-]+/g, '-') // Replace spaces and special chars with hyphens
                .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
                .substring(0, 50); // Limit length
            
            // Ensure uniqueness by adding index
            return id ? id + '-' + index : 'heading-' + index;
        },

        // Create catalog item HTML
        createCatalogItem: function(tagName, text, id) {
            var self = this;
            var navClass = self.config.classes[tagName + 'Nav'] || self.config.classes.h6Nav;
            
            return $('<li>')
                .addClass(navClass)
                .append(
                    $('<a>')
                        .attr('href', '#' + id)
                        .attr('data-target', id)
                        .text(text)
                        .on('click', function(e) {
                            e.preventDefault();
                            self.scrollToHeading(id);
                        })
                );
        },

        // Smooth scroll to heading
        scrollToHeading: function(headingId) {
            var self = this;
            var $target = $('#' + headingId);
            
            if ($target.length) {
                var scrollTop = $target.offset().top - self.config.scrollOffset;
                
                $('html, body').animate({
                    scrollTop: scrollTop
                }, self.config.smoothScrollDuration);
                
                // Update active state
                self.updateActiveState(headingId);
            }
        },

        // Update active state in catalog
        updateActiveState: function(activeId) {
            var self = this;
            var $catalogBody = $(self.config.selectors.catalogBody);
            
            // Remove all active classes
            $catalogBody.find('li').removeClass(self.config.classes.active);
            
            // Add active class to current item
            if (activeId) {
                $catalogBody
                    .find('a[data-target="' + activeId + '"]')
                    .parent()
                    .addClass(self.config.classes.active);
            }
        },

        // Initialize scroll spy functionality
        initScrollSpy: function() {
            var self = this;
            var $window = $(window);
            var $postContent = $(self.config.selectors.postContent);
            var $headings = $postContent.find(self.config.selectors.headings);
            
            if ($headings.length === 0) {
                return;
            }

            // Throttle scroll events for performance
            var scrollTimer = null;
            
            $window.on('scroll', function() {
                if (scrollTimer) {
                    clearTimeout(scrollTimer);
                }
                
                scrollTimer = setTimeout(function() {
                    self.updateScrollSpy($headings);
                }, 10);
            });
        },

        // Update scroll spy
        updateScrollSpy: function($headings) {
            var self = this;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            var currentHeading = null;
            
            // Find the current heading in viewport
            $headings.each(function() {
                var $heading = $(this);
                var headingTop = $heading.offset().top;
                var headingId = $heading.attr('id');
                
                if (headingTop <= scrollTop + self.config.scrollOffset) {
                    currentHeading = headingId;
                }
            });
            
            // Update active state
            self.updateActiveState(currentHeading);
        },

        // Bind events
        bindEvents: function() {
            var self = this;
            
            // Catalog toggle functionality
            $(document).on('click', '.catalog-toggle', function(e) {
                e.preventDefault();
                var $catalog = $(self.config.selectors.catalogContainer);
                $catalog.toggleClass('fold');
            });
            
            // Refresh catalog on window resize
            $(window).on('resize', function() {
                // Add small delay to ensure layout is complete
                setTimeout(function() {
                    self.refreshCatalog();
                }, 100);
            });
        },

        // Refresh catalog (useful after dynamic content changes)
        refreshCatalog: function() {
            this.generateCatalog();
            this.initScrollSpy();
        }
    };

    // Auto-initialize when document is ready
    $(document).ready(function() {
        // Only initialize on post pages (check for post-container)
        if ($('.post-container').length) {
            BlogCatalog.init();
        }
    });

    // Expose globally for manual control if needed
    window.BlogCatalog = BlogCatalog;

})(jQuery);