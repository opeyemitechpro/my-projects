
from mkdocs.plugins import BasePlugin
import json

class PopupPlugin(BasePlugin):
    def on_page_context(self, context, page, config, nav):
        popup = page.meta.get("popup")
        if popup:
            # Inject as JSON in meta tag
            context["extrahead"] = context.get("extrahead", "") + \
                f'<meta name="mkdocs-page-popup" content="{json.dumps(popup)}">'
        return context
