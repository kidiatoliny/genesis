<?php

declare(strict_types=1);

if (extension_loaded('xdebug') || extension_loaded('pcov')) {
    // Skip registering browser tests under code coverage to avoid sandbox port issues.
    return;
}

it('has welcome page', function (): void {
    $page = visit('/');

    $page->assertSee('Laravel');
});
