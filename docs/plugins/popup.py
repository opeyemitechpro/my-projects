
from mkdocs.plugins import BasePlugin
import json

class PopupPlugin(BasePlugin):
    def on_page_context(self, context, page, config, nav):
        popup = page.meta.get("popup")
        if popup:
            meta_tag = f'<meta name="mkdocs-page-popup" content="{json.dumps(popup)}">'
            context["extrahead"] = context.get("extrahead", "") + meta_tag
        return context

