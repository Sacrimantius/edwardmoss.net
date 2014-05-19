<?php 

$nav = array(
		array( 'page' => 'index.php', 'title' => 'Home' ),
		array( 'page' => '#about', 'title' => 'About' ),
		array( 'page' => '#contact', 'title' => 'Contact' ),
		array( 'page' => '#', 'title' => 'My Stuff', 'active' => array( 'canvas.php', 'parse.php', 'video.php', 'warframe.php', 'leagueohlegends.php', 'blog.php' ), 'dropdown' => array(
				array( 'header' => 'Work' ),
				array( 'page' => 'canvas.php', 'title' => '&ltCanvas&gt' ),
				array( 'page' => 'blog.php', 'title' => 'Parse' ),
				/*array( 'page' => 'video.php', 'title' => '&ltVideo&gt' ),
				array( 'header' => 'Gaming' ),
				array( 'page' => 'warframe.php', 'title' => 'Warframe' ),
				array( 'page' => 'leagueoflegends.php', 'title' => 'League of Legends' ),*/
			) ),
	);

?>

<div class="nav-collapse collapse">
	<ul class="nav">
		<?php foreach ($nav as $link) : ?>
			<li class="<?php
			if (isset($link['dropdown'])){
				echo 'dropdown ';
			}
			if ( basename($_SERVER['REQUEST_URI']) == $link['page'] || ( isset( $link['active'] ) && in_array(basename($_SERVER['REQUEST_URI']), $link['active']) ) ){
				echo 'active ';
			}
			?>">
			<a href="<?php echo $link['page']; ?>" class="<?php
				if (isset($link['dropdown'])){
					echo 'dropdown-toggle" data-toggle="dropdown">' . $link['title'] . '<b class="caret"></b>';
				}else{
					echo '">' . $link['title'];
				}?>
			</a>
			<?php if (isset($link['dropdown'])) : ?>
				<ul class="dropdown-menu">
					<?php foreach($link['dropdown'] as $dp) : ?>
						<?php if ( isset ( $dp['header'] ) ) : ?>
						<li class="nav-header"><?php echo $dp['header']; ?></li>
						<?php else : ?>
						<li class="<?php echo basename($_SERVER['REQUEST_URI']) == $dp['page'] ? 'active' : '' ;?> "><a href="<?php echo $dp['page']; ?>"><?php echo $dp['title']; ?></a></li>
						<?php endif; ?>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
		</li>
		<?php endforeach; ?>
	</ul>
</div><!--/.nav-collapse -->